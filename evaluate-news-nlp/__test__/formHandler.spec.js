import { handleSubmit } from '../src/client/js/formHandler';

describe('Testing the submit functionality', () => {
    test('handleSubmit() must be defined', () => {
        expect(handleSubmit).toBeDefined()
    })
})