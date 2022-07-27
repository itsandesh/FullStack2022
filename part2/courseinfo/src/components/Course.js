
const Courses = ({ courses }) => {
    return (
        <div>
            {courses.map(course => <div key={course.id}>
                <Header course={course.name} />
                <Content course={course.parts} />
                <Exercises course={course.parts} />
            </div>)}
        </div>
    )
}

const Header = ({ course }) => {
    return (
        <div>

            <h2> {course}  </h2>
        </div>
    )
}
// Using map method to show parts name and exercises //
const Content = ({ course }) => {
    return (
        <div >
            {course.map(part =>
                <p key={part.id}>
                    {part.name} {part.exercises}
                </p>)}
        </div>
    )
}

// Used reduce method to calculate total number of exercises //
const Exercises = ({ course }) => {
    return (
        <h4>
            total of {course.reduce((sum, part) => {
                return sum + part.exercises
            }, 0)} exercises
        </h4>

    )
}
export default Courses

//I have already seperated the Course component in previous exercise as said in Exercise 2.5. //