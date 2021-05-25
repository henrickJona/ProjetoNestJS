import { Test, TestingModule } from '@nestjs/testing';
import { User } from '../../models/user';

describe('Users', () => {
  let provider: User;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [User],
    }).compile();

    provider = module.get<User>(User);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
