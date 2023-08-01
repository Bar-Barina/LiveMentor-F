import React, { useEffect, useState } from "react";
import { getLiveMentorSvg } from "../services/SVG.service";
import { codeblockService } from "../services/codeblock.service";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDifficultyColor } from "../services/codeblock.service";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/mode/javascript/javascript";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/dracula.css";
import { Loader } from "../components/Loader";

import io from "socket.io-client";

export function CodeblockDetails() {
  const [codeblock, setCodeblock] = useState(null);
  const [nextCodeblockId, setNextCodeblockId] = useState(null);
  const [code, setCode] = useState("");
  const [role, setRole] = useState(null);
  const [showSmiley, setShowSmiley] = useState(false);
  const [runClicked, setRunClicked] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadCodeblock();
    loadNextCodeblockId();

    // Join the room for this codeblock
    socket.emit("join room", params.id);

    socket.on("role assign", (data) => {
      setRole(data.role);
    });

    // Listen for 'code update' events
    socket.on("code update", (data) => {
      setCode(data);
    });

    // Clean up the socket connection on unmount
    return () => {
      socket.disconnect();
    };
  }, [params.id]);

  async function loadCodeblock() {
    try {
      const codeblock = await codeblockService.getById(params.id);
      setCodeblock(codeblock);
      setCode(codeblock.code);
    } catch (error) {
      console.log("error:", error);
    }
  }

  const socketServerURL =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_SOCKET_SERVER_URL // Uses the production URL from .env
      : "http://localhost:3030";

  // Connect to the Socket.IO server
  const socket = io(socketServerURL);

  async function loadNextCodeblockId() {
    try {
      const nextId = await codeblockService.getNextCodeblockId(params.id);
      setNextCodeblockId(nextId);
    } catch (error) {
      console.log("error:", error);
    }
  }

  function onBack() {
    navigate(-1);
  }

  function checkSolution() {
    setRunClicked(true);
    if (code === codeblock.solution) setShowSmiley(true);
    else if (runClicked && code !== codeblock.solution) setShowSmiley(false);
  }

  if (!codeblock) return <Loader />;

  const difficultyColor = getDifficultyColor(codeblock.difficulty);

  return (
    <>
      <section className="codeblock-details-wrapper">
        <section className="codeblock-main-details">
          {/* Rendering a mentor/student indicator */}
          {/* ONLY THE MENTOR can edit the code details, ONLY THE STUDENT can try to solve the code */}
          <div className="mentor-wrapper flex align-center">
            {role === "mentor" && (
              <span className="mentor-mode">Mentor Mode</span>
            )}
            {role === "mentor" && (
              <Link to={`/edit/${codeblock._id}`} className="flex auto-center">Edit details
                <span
                  dangerouslySetInnerHTML={{
                    __html: getLiveMentorSvg("editIcon"),
                  }}
                ></span>
              </Link>
            )}
          </div>
          {role !== "mentor" && (
            <span className="student-mode">Student Mode</span>
          )}
          <div>
            <h3 className="title">{codeblock.title}</h3>
            <div className="diff-next flex">
              <h3 style={{ color: difficultyColor }}>{codeblock.difficulty}</h3>

              <button onClick={onBack} className="flex justify-center">
                <span
                  dangerouslySetInnerHTML={{
                    __html: getLiveMentorSvg("leftArrowIcon"),
                  }}
                ></span>
                Back
              </button>
              {/* Checking if there is a next codeblock to navigate to */}
              {nextCodeblockId && (
                <Link to={`/codeblock/${nextCodeblockId}`}>
                  Next
                  <span
                    dangerouslySetInnerHTML={{
                      __html: getLiveMentorSvg("rightArrowIcon"),
                    }}
                  ></span>
                </Link>
              )}
            </div>
          </div>
          <h3 className="explanation">{codeblock.explanation}</h3>
        </section>

        <div className="code-container flex column">
          <CodeMirror
            value={code}
            options={{
              mode: "javascript",
              theme: "dracula",
              lineNumbers: true,
              // Applying read only mode for mentor
              readOnly: role === "mentor",
            }}
            onBeforeChange={(editor, data, value) => {
              setCode(value);
              // Emit a 'code change' event
              socket.emit("code change", {
                code: value,
                codeblockId: params.id,
              });
            }}
          />
          <div className="actions flex space-between">
            <span className="static-title flex">
              Code Block
              <span
                dangerouslySetInnerHTML={{
                  __html: getLiveMentorSvg("upArrowIcon"),
                }}
              ></span>
            </span>

            {/* If the user tried to run the code and its wrong, it will display the "wrong" span */}
            {!showSmiley && runClicked && (
              <span className="wrong">Wrong Answer</span>
            )}
            {/* If the user tried to run the code and its right, it will display the "accepted" span */}
            {showSmiley && <span className="accepted">Accepted 😁</span>}
            {/* If the code is correct, it will display this indication to the mentor */}
            {code === codeblock.solution && role === "mentor" && (
              <span className="accepted"> This Solution Is Correct ✅</span>
            )}
            {/* If the user is a mentor it will not let him run the code */}
            {role === "mentor" ? (
              <span className="static-title">Read only</span>
            ) : (
              <button className="run" onClick={checkSolution}>
                Run
              </button>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
