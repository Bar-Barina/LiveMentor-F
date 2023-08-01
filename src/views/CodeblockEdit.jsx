import React, { useEffect } from "react";
import { useForm } from "../customHooks/useForm";
import { codeblockService } from "../services/codeblock.service";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { save } from "../store/actions/codeblock.actions";

export function CodeblockEdit() {
  const [codeblock, handleChange, setCodeblock] = useForm(
    codeblockService.getEmptyCodeblock()
  );

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
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
      dispatch(save(codeblock));
      navigate(-1);
    } catch (error) {
      console.log("error:", error);
    }
  }

  const { title, difficulty, code, solution, explanation } = codeblock;
  return (
    <section className="codeblock-edit">
      <div className="form-wrapper">
        <div className="edit-title">
          <h3>Mentor only</h3>
          <h1>{codeblock._id ? "Edit" : "Add"} code block</h1>
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
          <select
            value={difficulty}
            onChange={handleChange}
            name="difficulty"
            id="difficulty"
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          <label htmlFor="explanation">Explanation</label>
          <input
            value={explanation}
            onChange={handleChange}
            type="text"
            name="explanation"
            id="explanation"
            className="explanation"
          />
          <label htmlFor="solution">Solution</label>
          <input
            value={solution}
            onChange={handleChange}
            type="text"
            name="solution"
            id="solution"
            className="solution"
          />
          <div></div>
          <label htmlFor="code">Code</label>
          <input
            value={code}
            onChange={handleChange}
            type="text"
            name="code"
            id="code"
          />
          <div className="btns-wrapper flex">
            <button className="back" onClick={() => navigate(-1)}>
              Back
            </button>
            <button className="save">Save</button>
          </div>
        </form>
      </div>
    </section>
  );
}
