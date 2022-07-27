
const Course = ({ course }) => {

    return (
        <div>
            <Header course={course} />
            <Content course={course} />
            <Exercises course={course} />

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

const Content = ({ course }) => {
    return (
        <div>
            <Part1 part1={course.parts[0].name} exercises1={course.parts[0].exercises} />
            <Part2 part2={course.parts[1].name} exercises2={course.parts[1].exercises} />
            <Part3 part3={course.parts[2].name} exercises3={course.parts[2].exercises} />
            <Part4 part4={course.parts[3].name} exercises4={course.parts[3].exercises} />
        </div>
    )
}

const Part1 = (props) => {
    return (
        <div>
            <p>
                {props.part1} {props.exercises1}
            </p>
        </div>
    )
}
const Part2 = (props) => {
    return (
        <div>
            <p>
                {props.part2} {props.exercises2}
            </p>
        </div>
    )
}
const Part3 = (props) => {
    return (
        <div>
            <p>
                {props.part3} {props.exercises3}
            </p>
        </div>
    )
}
const Part4 = (props) => {
    return (
        <div>
            <p>
                {props.part4} {props.exercises4}
            </p>
        </div>
    )
}

const Exercises = ({ course }) => {
    return (
        <h3>
            total of   {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises} exercises
        </h3>

    )
}

export default Course