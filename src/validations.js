import * as Yup from "yup"

export const taskValidationSchema = Yup.object().shape({
    task: Yup.string()
        .min(2, 'Too Short!')
        .max(54, 'Task content can contain max 54 characters.')
        .required('Required'),
})