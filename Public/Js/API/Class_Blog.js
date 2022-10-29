class Blog {
    constructor (Id_Blog, Author, Title, Description) {
        this.Id_Blog = Id_Blog;
        this.Author = Author;
        this.Title = Title;
        this.Description = Description;
    }

}

const InsertData = () => {
    var Test = new Blog(Id_Blog, Author, Title, Description);
    console.log(Test.Author);
}

export default InsertData;


