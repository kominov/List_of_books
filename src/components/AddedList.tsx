import React from 'react'
import { IListOfBooks } from './ListOfBooks'
interface AddedListProps {
    addedBook: IListOfBooks[]
    deleteBook: (id: number) => void
}


export const AddedList: React.FC<AddedListProps> = React.memo( ({ addedBook, deleteBook }) => {
    return (<>
        {addedBook.length > 0 ?
            (<table className="centered">
                <thead>
                    <tr>
                        <th>Название</th>
                        <th>Автор</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {addedBook.map(book => (
                        <tr key={book.id}>
                            <td>{book.bookName}</td>
                            <td>{book.author}</td>
                            <td><i className='material-icons id__icon'
                                onClick={e=>deleteBook(book.id)}>delete</i></td>
                        </tr>
                    ))}

                </tbody>
            </table>) : ""
        }
    </>)
})