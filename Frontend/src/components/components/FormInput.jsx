function FormInput({
    label,
    name,
    type,
    value,
    onChange
}) {

    return (

        <div>

            <label className="block mb-2 font-semibold">

                {label}

            </label>

            <input

                type={type}

                name={name}

                value={value}

                onChange={onChange}

                className="w-full border rounded-lg p-3"

                required

            />

        </div>

    );

}

export default FormInput;