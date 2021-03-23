import React, { useState } from 'react'
import { IListOfBooks } from './ListOfBooks'
interface AddBookProp {
    onSave: (dataBookSave: IListOfBooks) => void
}

export const AddBook: React.FC<AddBookProp> = React.memo(({ onSave }) => {
    //стейт для инпутов
    const [dataInput, setDataInput] = useState<IListOfBooks>({ author: "", bookName: "", id: Date.now() })

    //записываем в стейт значение инпутов
    const handlerInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setDataInput(prev => ({ ...prev, [name]: value }));
    }
    //по нажатию на кнопку обнуляем инпуты, а иx значение записываем в стейт
    const addDataHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        onSave(dataInput);
        setDataInput({ author: "", bookName: "", id: Date.now() });
    }

    return (<>
        <div className="input__inner">
            <div className="input-field mt2">
                <input
                    name="bookName"
                    onChange={handlerInput}
                    value={dataInput.bookName}
                    type="text"
                    id="title"
                    placeholder=" Введите название книги" />
                <label htmlFor="title" className="active">Введите название книги</label>
            </div>
            <div className="input-field mt2">
                <input
                    name="author"
                    onChange={handlerInput}
                    value={dataInput.author}
                    type="text"
                    id="title"
                    placeholder=" Введите автора" />
                <label htmlFor="title" className="active">Введите автора</label>
            </div>
        </div>
        <button disabled={dataInput.author.length <= 2 && dataInput.bookName.length <= 2} onClick={addDataHandler} className="btn waves-effect  mt-20  blue darken-1" name="action">Добавить книгу
        <i className="material-icons right">add</i>
        </button>
    </>)
})