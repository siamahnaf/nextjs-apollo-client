"use client"
import { useState, ChangeEvent, useEffect } from "react";
import { HiChevronDown } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";

//Interface
interface Props {
    label: string;
    error?: boolean;
    message?: string;
    id: string;
    placeholder: string;
    options: { value: string, label: string }[];
    onChange: (e: string) => void;
    value: string;
}

const Select = ({ label, error = false, message = "", id, options, onChange, value, placeholder }: Props) => {
    //State
    const [open, setOpen] = useState<boolean>(false);
    const [list, setList] = useState<{ value: string, label: string }[]>(options);
    const [inputValue, setValue] = useState<string>(options.find(item => item.value === value)?.label || "");
    const [select, setSelect] = useState<string>(value);

    //Handler
    const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        const regex = new RegExp(e.target.value, 'i');
        const filteredList = options.filter(item =>
            regex.test(item.label)
        );
        setList(filteredList);
    }

    //Handler
    const onSelect = (value: string, label: string) => {
        setSelect(value)
        setValue(label)
        onChange(value)
    }

    useEffect(() => {
        if (value && !open) {
            if (!select) setValue("")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [open]);

    useEffect(() => {
        if (!value) {
            setValue("");
            setSelect("")
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    useEffect(() => {
        setList(options)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [options])

    return (
        <div className="mb-3">
            <label htmlFor={id} className="font-semibold text-gray-500 mb-2 block text-[15px]">{label}</label>
            <div className="relative">
                <input
                    id={id}
                    className={`border border-solid rounded-md px-3 py-2.5 w-full text-sm text-gray-700 cursor-pointer ${error ? "border-red-600 focus:outline-red-600" : "border-gray-300 focus:outline-main"}`}
                    placeholder={placeholder}
                    onChange={onSearchChange}
                    value={inputValue}
                    onFocus={(e) => {
                        setOpen(true);
                        e.target.setAttribute("autoComplete", "off")
                    }}
                    onBlur={() => setOpen(false)}
                />
                <div className={`absolute top-0 right-0 bottom-0 px-2 flex justify-center items-center rounded-e-md transition-all ${open ? "rotate-180" : ""}`}>
                    <HiChevronDown className="text-[22px] text-gray-500/95" />
                </div>
                <ul className={`max-h-[400px] absolute top-full mt-2 left-0 w-full border border-solid transition-all duration-200 ease-[cubic-bezier(0.4, 0, 0.2, 1)] border-gray-200 rounded-md z-40 bg-white shadow-3xl overflow-auto origin-center ${open ? "opacity-100 scale-100 visible" : "opacity-0 invisible scale-95"}`}>
                    {list.map((item, i) => (
                        <li key={i} className={`px-4 hover:bg-gray-100 py-1.5 text-[15px] text-gray-500 font-medium select-none cursor-pointer relative ${item.value === value ? "bg-gray-100" : ""}`} onClick={() => onSelect(item.value, item.label)}>
                            {item.label}
                            {item.value === value &&
                                <FaCheck className="absolute top-1/2 right-3 text-main text-sm -translate-y-1/2" />
                            }
                        </li>
                    ))}
                    {list.length === 0 &&
                        <p className="py-2 px-3 text-sm text-gray-500">Nothing found!</p>
                    }
                </ul>
            </div>
            <p className={`text-sm text-red-600 mt-1 transition-all ${error ? "opacity-100 visible -translate-y-0" : "opacity-0 invisible -translate-y-1"}`}>{message}</p>
        </div>
    );
};

export default Select;