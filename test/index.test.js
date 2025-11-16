const { capitalizeWords, filterActiveUsers, logAction } = require('../index')

describe('Utility Functions', () => {
    describe('capitalizeWords', () => {
        it('should capitalize the first letter of each word', () => {
            const input = 'hello world from jest';
            const expected = 'Hello World From Jest';
            expect(capitalizeWords(input)).toBe(expected);
        });

        it('should handle empty strings', () => {
            const input = '';
            const expected = '';
            expect(capitalizeWords(input)).toBe(expected);
        });
    });

    describe('filterActiveUsers', () => {
        it('should return only active users', () => {
            const users = [
                { name: 'Alice', isActive: true },
                { name: 'Bob', isActive: false },
                { name: 'Charlie', isActive: true }
            ];
            const expected = [
                { name: 'Alice', isActive: true },
                { name: 'Charlie', isActive: true }
            ];
            expect(filterActiveUsers(users)).toEqual(expected);
        });

        it('should return an empty array if no users are active', () => {
            const users = [
                { name: 'Dave', isActive: false },
                { name: 'Eve', isActive: false }
            ];
            const expected = [];
            expect(filterActiveUsers(users)).toEqual(expected);
        });
    });

    describe('logAction', () => {
        it('should log the action with username and timestamp', () => {
            const action = 'login';
            const username = 'testUser';
            const logMessage = logAction(action, username);
            expect(logMessage).toMatch(new RegExp(`^User ${username} performed ${action} at `));
        });
    });
});