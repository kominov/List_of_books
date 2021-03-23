import React, { useEffect, useState } from 'react'
import { AddBook } from './AddBook'
import { AddedList } from './AddedList'
export interface IListOfBooks {
    author: string
    bookName: string
    id: number
}

export const ListOfBooks: React.FC = () => {
    const [listOfBooksState, setListOfBooksState] = useState<IListOfBooks[]>([])
    
    useEffect(()=>{
        let save = JSON.parse(localStorage.getItem('books') || '[]') as IListOfBooks[];
        setListOfBooksState(save);
    },[])
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(listOfBooksState));
    }, [listOfBooksState])
    
    const deleteHandler = ( id: number) => {
        setListOfBooksState(prev => prev.filter(item => item.id !== id))
    }

    return (<>
        <div className="container">
            <AddBook onSave={addedBook => setListOfBooksState(prev => ([addedBook, ...prev]))} />
            <AddedList addedBook={listOfBooksState} deleteBook ={deleteHandler} />
        </div>
    </>)
}