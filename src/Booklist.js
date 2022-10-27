import React from 'react';
import  './BookList.css';
import Books from './Books';


class Booklist extends React.Component {
    render(){
        const Booklist = this.props.books.map((book , i) => {
            return <Books book={book} key={i}/>
        })

        return (
            <section class="page-section bg-light" id="portfolio">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">BookFolio</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    {Booklist}
                        
                    
                </div>
                </div>
                
</section>
        )
    }
    
}

export default Booklist;

