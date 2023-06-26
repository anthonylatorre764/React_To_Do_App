import './Form.css';

type Props = {
    handleAdd: (event: React.MouseEvent) => void
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}


const Form = ({ handleAdd, handleChange }: Props) => {


  return (
    <>
      <div id="formContainer">
        <form>
          <label htmlFor="task">Task:</label>
          <input type="text" id="task" maxLength={47} onChange={handleChange} />
          <button onClick={(e) => handleAdd(e)}>add to list</button>
        </form>  
      </div>
    </>
  );
};

export default Form;
