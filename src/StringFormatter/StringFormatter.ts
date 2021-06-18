import { ValueTooHugeError } from './ValueTooHugeException';

export type NumberFormatter = (number: string) => string;

/**
 * 포맷팅 기능을 제공합니다.
 *
 * @export
 * @class StringFormatter
 */
export class StringFormatter {
    /**
     * 숫자에 1000 단위 구분자를 추가해서 문자열로 출력합니다.
     *
     * @param {(number | string)} value
     * @param {string} delimiter 구분자; 기본값: **,** 콤마 문자
     * @returns {string}
     * @memberof StringFormatter
     */
    public numberWithDelimiter(
        value: number | string,
        delimiter = ',',
    ): string {
        let stringValue = '';
        let fraction = '';
        if (typeof value === 'number') {
            stringValue = value.toString();
        }

        if (typeof value === 'string') {
            stringValue = value;
        }

        if (stringValue.indexOf('.') >= 0) {
            const splittedValue = stringValue.split('.');

            if (splittedValue.length > 1) {
                stringValue = splittedValue[0];
                fraction = splittedValue[1];
            }
        }

        stringValue = stringValue.replace(/\B(?=(\d{3})+(?!\d))/g, delimiter);

        return `${stringValue}${fraction ? `.${fraction}` : ''}`;
    }

    /**
     * 숫자에 1000 단위 구분자를 추가해서 문자열로 출력합니다.
     *
     * @param {(number | string)} value
     * @param {string} delimiter 구분자; 기본값: **,** 콤마 문자
     * @returns {string}
     * @memberof StringFormatter
     * @deprecated May be removed at next version.
     */
    public NumberWithDelimiter(
        value: number | string,
        delimiter = ',',
    ): string {
        return this.numberWithDelimiter(value, delimiter);
    }

    /**
     * 파일 크기를 출력합니다.
     *
     * @param {number} value
     * @param {NumberFormatter} [numberFormatter]
     * @param {string[]} [units]
     * @returns {string}
     * @memberof StringFormatter
     * @example
     * ```typescript
     * const fomatter = new StringFormatter()
     * fomatter.fileSize(10240);
     * ```
     */
    public fileSize(
        value: number,
        numberFormatter?: NumberFormatter,
        units?: string[],
    ): string {
        if (Number.MAX_VALUE < value) {
            throw new ValueTooHugeError();
        }

        const defaultUnits = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
        const actualUnits = units ?? defaultUnits;
        const basis = 1024.0;

        let index = 0;
        let temp = value;

        if (temp < basis) {
            return this.toFomattedFileSize(
                Math.floor(temp).toString(),
                actualUnits[this.min(index, actualUnits.length - 1)],
                numberFormatter,
            );
        }

        do {
            temp = temp / basis;
            index++;
        } while (temp > basis && index < actualUnits.length - 1);

        return this.toFomattedFileSize(
            Math.ceil(temp) > temp ? temp.toFixed(2) : temp.toFixed(0),
            actualUnits[this.min(index, actualUnits.length - 1)],
            numberFormatter,
        );
    }

    private toFomattedFileSize(
        value: string,
        unit: string,
        numberFormatter?: NumberFormatter,
    ): string {
        let stringValue = '';
        if (typeof numberFormatter === 'function') {
            stringValue = numberFormatter(value);
        } else {
            stringValue = value;
        }

        return `${stringValue} ${unit}`;
    }

    private min(a: number, b: number): number {
        return a > b ? b : a;
    }
}
