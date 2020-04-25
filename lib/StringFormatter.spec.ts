import { StringFormatter } from './StringFormatter';

describe('StringFormatter', () => {
    const formatter = new StringFormatter();
    it('세자리마다 구분자가 추가된 숫자 형식의 문자열', () => {
        expect(formatter.NumberWithDelimiter(1000)).toBe('1,000');
    });

    it('큰 숫자도 세자리마다 구분자가 추가된 숫자 형식의 문자열', () => {
        expect(formatter.NumberWithDelimiter(12345678901234)).toBe(
            '12,345,678,901,234',
        );
    });

    it('소수점 아래 값은 구분자가 추가되지 않습니다.', () => {
        expect(formatter.NumberWithDelimiter(1000.1234)).toBe('1,000.1234');
    });

    it('숫자형식의 문자열을 입력하면 세자리마다 구분자가 추가된 숫자 형식의 문자열', () => {
        expect(formatter.NumberWithDelimiter('1000')).toBe('1,000');
    });

    it('숫자형식의 문자열을 입력하면 소수점 아래 값은 구분자가 추가되지 않습니다.', () => {
        expect(formatter.NumberWithDelimiter('1000.1234')).toBe('1,000.1234');
    });

    it('빈 분자열은 빈 문자열을 반환합니다.', () => {
        expect(formatter.NumberWithDelimiter('')).toBe('');
    });
});
