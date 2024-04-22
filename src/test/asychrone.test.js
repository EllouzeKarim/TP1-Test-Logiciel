import { expect, describe, it} from 'vitest';
import { fetchRandomUser } from '../asynchrone';

describe('fetchData()', () => {
    it('should fetch data from the server', async () => {
        try {
            const utilisateur = await fetchRandomUser();
            expect(typeof utilisateur).toBe('object');
            expect(utilisateur).toEqual(expect.objectContaining({
                gender: expect.any(String),
                name: expect.any(Object),
                location: expect.any(Object),
                email: expect.any(String),
                login: expect.any(Object),
                dob: expect.any(Object),
                registered: expect.any(Object),
                phone: expect.any(String),
                cell: expect.any(String),
                id: expect.any(Object),
                picture: expect.any(Object),
                nat: expect.any(String)
            }));
        }
        catch (error) {
            fail('Should not throw any error');
        }})
});