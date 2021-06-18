/**
 * 포맷팅 기능을 제공합니다.
 *
 * @export
 * @class StringFormatter
 */
export class StringFormatter {
    /**
     * 숫자에 1000 단위 구분자를 추갛해서 문자열로 출력합니다.
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
     * 숫자에 1000 단위 구분자를 추갛해서 문자열로 출력합니다.
     *
     * @param {(number | string)} value
     * @param {string} delimiter 구분자; 기본값: **,** 콤마 문자
     * @returns {string}
     * @memberof StringFormatter
     */
    public NumberWithDelimiter(
        value: number | string,
        delimiter = ',',
    ): string {
        return this.numberWithDelimiter(value, delimiter);
    }
}
