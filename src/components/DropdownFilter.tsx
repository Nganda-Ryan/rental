"use client";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

interface DropdownFilterProps {
    dataList: { id: string; value: string }[];
    handleSelected: (selected: { id: string; value: string } | null) => void;
    placeholder?: string; // Nouvelle prop pour le placeholder
    label?: string;
    size?: string; //
}

export default function DropdownFilter({ dataList, handleSelected, placeholder = "Veuillez entrer une valeur", label="", size="w-96" }: DropdownFilterProps) {
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState<{ id: string; value: string } | null>(null);

    const filteredData = query === '' ? dataList : 
        dataList.filter((item) => {
            return item.value.toLowerCase().includes(query.toLowerCase());
        });

    const handleComboboxChanges = (value: { id: string; value: string } | null) => {
        setSelected(value);
        handleSelected(value);
    };

    return (
        <span className={`${size} dark:text-slate-50 inline`}>
            <div>
                {label}
            </div>
            <Combobox value={selected} onChange={handleComboboxChanges} onClose={() => setQuery('')}>
                <div className="relative rounded-sm border dark:border-strokedark dark:bg-boxdark border-slate-200 p-1 w-full flex justify-between flex-nowrap">
                    <ComboboxInput
                        className="px-1 py-1 focus:outline-none focus:ring-0 w-full dark:bg-inherit"
                        displayValue={(item: { id: string; value: string } | null) => item?.value || ''}
                        onChange={(event) => setQuery(event.target.value)}
                        placeholder={placeholder} // Ajout du placeholder
                    />
                    <ComboboxButton className="">
                        <ChevronUpDownIcon className="size-4 fill-slate/60 group-data-[hover]:fill-slate" />
                    </ComboboxButton>
                </div>

                <ComboboxOptions
                    anchor="bottom"
                    className={`${size} dark:text-slate-50 z-[100000000000] ml-2 mt-1 rounded-sm bg-white border dark:border-strokedark dark:bg-boxdark`}
                >
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <ComboboxOption
                                key={item.id}
                                value={item}
                                className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-2 select-none data-[focus]:bg-slate/10"
                            >
                                <CheckIcon className="invisible size-4 fill-slate group-data-[selected]:visible" />
                                <div className="">{item.value}</div>
                            </ComboboxOption>
                        ))
                    ) : (
                        <div className="px-2 py-1.5 text-slate-500">Aucun résultat trouvé</div> // Message si la liste est vide
                    )}
                </ComboboxOptions>
            </Combobox>
        </span>
    );
}