import { useCallback, useEffect, useState } from "react";

const useGetIfPasswordIsStrong = (password: string) => {
  const getPasswordStrength = (password: string): number => {
    const weak = /[0-9a-zA-_Z!@#$%^&.*]{5,}/;
    const moderate = /[0-9a-zA-_Z!@#$%^&.*]{8,}/;
    const strong = /(?=.*\D)[0-9a-zA-_Z!@#$%^&.*]{8,}$/;
    const veryStrong =
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])[0-9a-zA-_Z!@#$%^&.*]{8,}$/;
    const superStrong =
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!_@#$%^&*.])[0-9a-zA-_Z!@#$%^&.*]{8,}$/;

    if (superStrong.test(password)) return 6;
    if (veryStrong.test(password)) return 5;
    if (strong.test(password)) return 4;
    if (moderate.test(password)) return 3;
    if (weak.test(password)) return 2;
    return 1;
  };

  const [passwordStrength, setPasswordStrength] = useState<string | null>(null);
  const [passwordStrenghtColorIndicator, setPasswordStrenghtColorIndicator] =
    useState(0);

  const passwordIsStrong = useCallback(() => {
    return getPasswordStrength(password) === 6
      ? setPasswordStrength("super strong")
      : getPasswordStrength(password) === 5
      ? setPasswordStrength("very strong")
      : getPasswordStrength(password) === 4
      ? setPasswordStrength("strong")
      : getPasswordStrength(password) === 3
      ? setPasswordStrength("moderate")
      : getPasswordStrength(password) === 2
      ? setPasswordStrength("weak")
      : setPasswordStrength("very weak");
  }, [password]);

  const colorByStrengthPassword = useCallback(() => {
    return getPasswordStrength(password) === 6
      ? setPasswordStrenghtColorIndicator(6)
      : getPasswordStrength(password) === 5
      ? setPasswordStrenghtColorIndicator(5)
      : getPasswordStrength(password) === 4
      ? setPasswordStrenghtColorIndicator(4)
      : getPasswordStrength(password) === 3
      ? setPasswordStrenghtColorIndicator(3)
      : getPasswordStrength(password) === 2
      ? setPasswordStrenghtColorIndicator(2)
      : setPasswordStrenghtColorIndicator(0);
  }, [password]);

  useEffect(() => {
    passwordIsStrong();
    colorByStrengthPassword();
  }, [passwordIsStrong, colorByStrengthPassword]);

  const color =
    passwordStrenghtColorIndicator === 6
      ? "border-green-600"
      : passwordStrenghtColorIndicator === 5
      ? "border-yellow-500"
      : passwordStrenghtColorIndicator === 4
      ? "border-orange-200"
      : passwordStrenghtColorIndicator === 3 ||
        passwordStrenghtColorIndicator === 2
      ? "border-orange-500"
      : "border-red-600";

  const backgroundColor =
    passwordStrenghtColorIndicator === 6
      ? "rgb(22 163 74)"
      : passwordStrenghtColorIndicator === 5
      ? "rgb(234 179 8)"
      : passwordStrenghtColorIndicator === 4
      ? "rgb(254 215 170)"
      : passwordStrenghtColorIndicator === 3 ||
        passwordStrenghtColorIndicator === 2
      ? "rgb(249 115 22)"
      : "rgb(220 38 38)";

  return {
    passwordStrength,
    passwordStrenghtColorIndicator,
    color,
    backgroundColor,
  };
};

export default useGetIfPasswordIsStrong;
