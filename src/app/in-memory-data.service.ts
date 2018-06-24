import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Artemis'},
      { id: 2, name: 'Aphrodite' },
      { id: 3, name: 'Athena' },
      { id: 4, name: 'Demeter' },
      { id: 5, name: 'Hera' },
      { id: 6, name: 'Hestia' },
      { id: 7, name: 'Apollo' },
      { id: 8, name: 'Dionysus' },
      { id: 9, name: 'Hades' },
      { id: 10, name: 'Hermes' },
      { id: 11, name: 'Poseidon' },
      { id: 12, name: 'Zeus' }
    ];
    return {heroes};
  }
}