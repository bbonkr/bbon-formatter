import { StringFormatter } from './StringFormatter';
import { ValueTooHugeError } from './ValueTooHugeException';

describe('StringFormatter.numberWithDelimiter', () => {
    const formatter = new StringFormatter();
    it('세자리마다 구분자가 추가된 숫자 형식의 문자열', () => {
        expect(formatter.numberWithDelimiter(1000)).toBe('1,000');
    });

    it('큰 숫자도 세자리마다 구분자가 추가된 숫자 형식의 문자열', () => {
        expect(formatter.numberWithDelimiter(12345678901234)).toBe(
            '12,345,678,901,234',
        );
    });

    it('소수점 아래 값은 구분자가 추가되지 않습니다.', () => {
        expect(formatter.numberWithDelimiter(1000.1234)).toBe('1,000.1234');
    });

    it('숫자형식의 문자열을 입력하면 세자리마다 구분자가 추가된 숫자 형식의 문자열', () => {
        expect(formatter.numberWithDelimiter('1000')).toBe('1,000');
    });

    it('숫자형식의 문자열을 입력하면 소수점 아래 값은 구분자가 추가되지 않습니다.', () => {
        expect(formatter.numberWithDelimiter('1000.1234')).toBe('1,000.1234');
    });

    it('빈 분자열은 빈 문자열을 반환합니다.', () => {
        expect(formatter.numberWithDelimiter('')).toBe('');
    });
});

describe('StringFormatter.fileSize', () => {
    const formatter = new StringFormatter();

    it('값이 기준값 (1024) 보다 작은 경우', () => {
        expect(formatter.fileSize(1000)).toBe('1000 Bytes');
    });

    it('값이 소수점을 포함하고 기준값 (1024) 보다 작은 경우', () => {
        expect(formatter.fileSize(900.21)).toBe('900 Bytes');
    });

    it('값이 소수점을 포함하고 기준값 (1024) 보다 작고 포맷터가 지정된 경우', () => {
        expect(formatter.fileSize(1002.21, formatter.numberWithDelimiter)).toBe(
            '1,002 Bytes',
        );
    });

    it('KB - 1 연산 결과가 소수점을 포함하지 않음 ', () => {
        expect(
            formatter.fileSize(2 * 1024, formatter.numberWithDelimiter),
        ).toBe('2 KB');
    });

    it('KB - 2 연산 결과가 소수점을 포함 ', () => {
        expect(
            formatter.fileSize(2.05 * 1024, formatter.numberWithDelimiter),
        ).toBe('2.05 KB');
    });

    it('MB - 1 연산 결과가 소수점을 포함하지 않음', () => {
        expect(
            formatter.fileSize(2 * 1024 * 1024, formatter.numberWithDelimiter),
        ).toBe('2 MB');
    });

    it('MB - 2 연산 결과가 소수점을 포함', () => {
        expect(
            formatter.fileSize(
                2.012 * 1024 * 1024,
                formatter.numberWithDelimiter,
            ),
        ).toBe('2.01 MB');
    });

    it('PB - 1 연산 결과가 소수점을 포함하지 않음', () => {
        expect(
            formatter.fileSize(
                2 * 1024 * 1024 * 1024 * 1024 * 1024,
                formatter.numberWithDelimiter,
            ),
        ).toBe('2 PB');
    });

    it('PB - 2 연산 결과가 소숫점을 포함함', () => {
        expect(
            formatter.fileSize(
                2.159 * 1024 * 1024 * 1024 * 1024 * 1024,
                formatter.numberWithDelimiter,
            ),
        ).toBe('2.16 PB');
    });

    it('PB - 2 매우 큰 값', () => {
        expect(
            formatter.fileSize(
                2 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
                formatter.numberWithDelimiter,
            ),
        ).toBe('2,048 PB');
    });

    it('Error 매우 큰 값', () => {
        expect(() =>
            formatter.fileSize(
                Math.pow(2 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024, 1024),
                formatter.numberWithDelimiter,
            ),
        ).toThrow(ValueTooHugeError);
    });

    it('사용자 정의 단위 사용 1', () => {
        expect(
            formatter.fileSize(
                2 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
                formatter.numberWithDelimiter,
                ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            ),
        ).toBe('2 EB');
    });

    it('사용자 정의 단위 사용 2', () => {
        expect(
            formatter.fileSize(
                2.45 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024,
                formatter.numberWithDelimiter,
                ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            ),
        ).toBe('2.45 EB');
    });
});
