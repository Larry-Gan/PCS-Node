import React, { useState } from 'react';
import { useRouter } from 'next/router';
import AUTOCOMPLETE_KEY from 'src/creds/geocode-key.json';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

export type AddTodoFn = (todo: string) => void;

interface valueType {
  label: string;
}

export const TodoForm: React.FC<{ addTodo: AddTodoFn }> = ({ addTodo }) => {
  const [todo, setTodo] = useState(''); //this will be inputquery equilvalent
  //const [ address, setAddress ] = React.useState("");
  const router = useRouter();
  const [value, setValue] = useState<valueType>();

  //const handleSelect = async value => {};

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    //PUT HTTP REQUEST HERE TO UPDATE WITH KEY STROKES
    /*
    const myMaybeNullElement = window.document.getElementById("value");
    myMaybeNullElement?.nodeName;
    if (myMaybeNullElement === null) {
      alert('oops');
    }
    else{
      myMaybeNullElement.nodeName;
    }*/

    if (event.key == 'Enter' && value != null && value.label != null) {
      console.log('This should be value', value);
      console.log('This should be the label string ', value.label);
      //setTodo(value.label);
      console.log('THIS SHOULD B THE TODO', todo); //This is entered string...
      //string...
      addTodo(todo);
      setTodo('');

      router.push(`/search?address=${value.label}`);
      /**
       * event.preventDefault();
       * router.push(/search?address=`${todo}`);
       */
    }
  };

  return (
    <>
      <div className="overflow-visible">
        <GooglePlacesAutocomplete
          apiKey={AUTOCOMPLETE_KEY.key}
          selectProps={{
            value,
            onChange: setValue,
            onKeyDown: handleKeyDown,
            placeholder: 'Enter Your Address',
          }}
        />
        {console.log('CHECK DIS', value)}
      </div>
    </>
  );
};
