import { StringFormatter } from '@bbon/formatter';
import React, { useMemo, useState } from 'react';

const Example = () => {
    const formatter = new StringFormatter();
    const [value, setValue] = useState('');

    const numberValue = useMemo(() => {
        const numberValue = parseInt(value, 10);
        if (Number.isNaN(numberValue)) {
            return undefined;
        }

        return numberValue;
    }, [value]);

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.currentTarget.value;
        const numberValue = parseInt(inputValue, 10);

        if (inputValue.length < 14) {
            if (!inputValue) {
                setValue((_) => '');
            }

            if (!Number.isNaN(numberValue)) {
                setValue((_) => inputValue);
            }
        }
    };

    return (
        <div>
            <div>
                <input
                    type="number"
                    onChange={handleChangeInput}
                    value={value}
                    maxLength={13}
                />
            </div>
            <div>
                <dl>
                    <dt>Format:</dt>
                    <dd>
                        {typeof numberValue === 'undefined'
                            ? 'Value is not number'
                            : formatter.numberWithDelimiter(numberValue)}
                    </dd>
                    <dt>File size:</dt>
                    <dd>
                        {typeof numberValue === 'undefined'
                            ? 'Value is not number'
                            : formatter.fileSize(
                                  numberValue,
                                  formatter.numberWithDelimiter,
                              )}
                    </dd>
                </dl>
            </div>
        </div>
    );
};

export default Example;
