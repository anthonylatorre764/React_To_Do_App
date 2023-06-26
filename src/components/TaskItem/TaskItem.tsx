type Task = {
    task: string
}

export default function TaskItem(props: Task) {
    return (
        <>
            {props.task}
        </>
    )
}

export type {Task}