import { AppDataSource } from "../db/connection";
import { User } from "../db/entities/User";

const userRepository = AppDataSource.getRepository(User);

const addUser = async (user: User): Promise<User | null> => {
  try {
    await userRepository.save(user);
  } catch (error) {
    console.error(error);
    return null;
  }
  return user;
};

const authenticateUser = async (user: User): Promise<User | null> => {
  const authenticated = await userRepository.findOneBy({ email: user.email });
  if (authenticated) {
    return authenticated;
  }
  return null;
};

const updateUser = async (user: User): Promise<User | null> => {
  const userExists = await userRepository.findOneBy({ id: user.id });
  if (!userExists) return null;

  try {
    await userRepository.save(user);
  } catch (error) {
    console.error(error);
  }

  return user;
};

export { addUser, authenticateUser, updateUser };
