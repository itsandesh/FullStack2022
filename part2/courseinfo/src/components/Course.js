
const Course = ({ course }) => {

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

    return (
        <div>
            <Header course={course} />
            <Content course={course} />

        </div>
    )
}

export default Course