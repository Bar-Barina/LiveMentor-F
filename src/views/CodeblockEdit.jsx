import React, { useEffect } from "react";
import { useForm } from "../customHooks/useForm";
import { codeblockService } from "../services/codeblock.service";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { save } from "../store/actions/codeblock.actions";

export function CodeblockEdit() {
  //   const user = useSelector((storeState) => storeState.userModule.loggedInUser);
  const [codeblock, handleChange, setCodeblock] = useForm(
    codeblockService.getEmptyCodeblock()
  );

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    //   if (!user || !user.isAdmin) navigate("/");
    loadCodeblock();
  }, []);

  async function loadCodeblock() {
    const codeblockId = params.id;
    if (codeblockId) {
      try {
        const codeblock = await codeblockService.getById(codeblockId);
        setCodeblock(codeblock);
      } catch (err) {
        console.log("load codeblock", err);
      }
    }
  }

  async function onSaveCodeblock(ev) {
    ev.preventDefault();
    try {
      // codeblock.createdAt = Date.now();
      console.log("from edit", codeblock);
      dispatch(save(codeblock));
      navigate(-1);
    } catch (error) {
      console.log("error:", error);
    }
  }

  //   if (!user || !user.isAdmin) return;
  const { title, difficulty, code, solution, explanation } = codeblock;
  return (
    <section className="codeblock-edit">
      <div className="form-wrapper">
        <div className="edit-title">
          <h1>{codeblock._id ? "Edit" : "Add"} Codeblock</h1>
        </div>
        <form onSubmit={onSaveCodeblock}>
          <label htmlFor="title">Title</label>
          <input
            value={title}
            onChange={handleChange}
            type="text"
            name="title"
            id="title"
          />
          <label htmlFor="difficulty">Difficulty</label>
          <input
            value={difficulty}
            onChange={handleChange}
            type="text"
            name="difficulty"
            id="difficulty"
          />
          <label htmlFor="code">Code</label>
          <input
            value={code}
            onChange={handleChange}
            type="text"
            name="code"
            id="code"
          />
          <label htmlFor="solution">Solution</label>
          <input
            value={solution}
            onChange={handleChange}
            type="text"
            name="solution"
            id="solution"
          />
          <label htmlFor="explanation">Explanation</label>
          <input
            value={explanation}
            onChange={handleChange}
            type="text"
            name="explanation"
            id="explanation"
          />
          <button>Save</button>
        </form>
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </section>
  );
}
