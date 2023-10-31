import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const secretKey = 'df56626d558357dd879da40ae67487548817e2db';

interface UserTokenProps {
  id: string;
}

interface ITokenPayload {
  user: UserTokenProps;
}

interface IVerifyTokenResponse extends jwt.JwtPayload, ITokenPayload { }

export const createToken = ({ id }: UserTokenProps) => {

  const payload: ITokenPayload = {
    user: { id },
  };

  const token = jwt.sign(payload, secretKey, {
    expiresIn: '1h',
  });

  return { token };
};
