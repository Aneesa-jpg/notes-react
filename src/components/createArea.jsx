import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
function CreateArea(props){
  const [notes,setValues]=useState({
    title: "",
    content:""
  });
const [isExpanded, setExpanded] = useState(false);

function handleChange(event){
  const {name,value}= (event.target);
  setValues(prevValues => {
    return {...prevValues, [name]:value};
  });
}
function submitClick(event){
  event.preventDefault();
  props.addNotes(notes);
  setValues({
    title: "",
    content:""
  })

}

function handleClick(){
setExpanded(true);
}
return(
  <form>
  {isExpanded &&   <input name="title" placeholder="Title" value={notes.title} onChange={handleChange}/> }
  <textarea name="content" placeholder="Take notes.." rows={isExpanded? "4" : "1"} cols="50" value={notes.content} onChange={handleChange} onClick={handleClick}/>
  <button onClick={submitClick}><AddIcon /></button>
</form>

);
}
export default CreateArea;
