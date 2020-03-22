import { useLocalStorage } from './'
import { renderHook, act } from "@testing-library/react-hooks";

const SAMPLE_OBJECT = {
    title: 'An article about the meaning of life',
    body: 'Now I realize this was too ambitious and am gonna stop myself there.'
}

const SAMPLE_NUMBER = 1234567890

const SAMPLE_STRING = 'Catch me outside'

describe('useLocalStorage', () => {
    it('can save an object to local storage', () => {
        const { result } = renderHook(() => (
            useLocalStorage('draft', SAMPLE_OBJECT)
        ));

        expect(result.current[0].title).toBe('An article about the meaning of life');
    })

    it('can update an object from local storage', () => {
        const { result } = renderHook(() => (
            useLocalStorage('draft', SAMPLE_OBJECT)
        ));

        expect(result.current[0].title).toBe('An article about the meaning of life');

        act(() => {
            result.current[1]({
                ...result.current[0],
                title: 'Changed title'
            });
        });

        expect(result.current[0].title).toBe('Changed title');
    })

    it('can save a number to local storage', () => {
        const { result } = renderHook(() => (
            useLocalStorage('number', SAMPLE_NUMBER)
        ));

        expect(result.current[0]).toBe(SAMPLE_NUMBER);
    })

    it('can update a number from local storage', () => {
        const { result } = renderHook(() => (
            useLocalStorage('number', SAMPLE_NUMBER)
        ));

        expect(result.current[0]).toBe(SAMPLE_NUMBER);

        act(() => {
            result.current[1](SAMPLE_NUMBER * 2);
        });

        expect(result.current[0]).toBe(SAMPLE_NUMBER * 2);
    })

    it('can save a string to local storage', () => {
        const { result } = renderHook(() => (
            useLocalStorage('string', SAMPLE_STRING)
        ));

        expect(result.current[0]).toBe(SAMPLE_STRING);
    })

    it('can update a number from local storage', () => {
        const { result } = renderHook(() => (
            useLocalStorage('string', SAMPLE_STRING)
        ));

        expect(result.current[0]).toBe(SAMPLE_STRING);

        act(() => {
            result.current[1]('Nope.');
        });

        expect(result.current[0]).toBe('Nope.');
    })
})
