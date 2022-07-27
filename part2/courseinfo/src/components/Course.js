
const Course = ({ course }) => {

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Exercises course={course.parts} />

        </div>
    )
}

const Header = ({ course }) => {
    return (
        <div>
            <h1> {course.name}  </h1>
        </div>
    )
}
//using map method to show parts name and exercises
const Content = ({ course }) => {
    return (
        <div >
            {course.parts.map(part =>
                <p key={part.id}>
                    {part.name} {part.exercises}
                </p>)}
        </div>
    )
}

// used reduce method to calculate total number of exercises 
const Exercises = ({ course }) => {
    return (
        <h3>
            total of {course.reduce((sum, part) => {
                return sum + part.exercises
            }, 0)} exercises
        </h3>

    )
}

export default Course