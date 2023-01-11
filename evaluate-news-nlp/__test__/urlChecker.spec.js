import { isValidHttpUrl } from '../src/client/js/urlChecker'

describe('Testing the URL checker', () => {
    test('URL must begin with a scheme', () => {
        const isValid = isValidHttpUrl('www.example.com')
        expect(isValid).toBeFalsy
    })
})