/// <reference types="react" />
type ContextType = {
    updateScroll: () => void;
};
export declare const ScrollProvider: (prop: {
    children: JSX.Element | JSX.Element[];
    updateScroll: () => void;
}) => import("react/jsx-runtime").JSX.Element;
declare const useScroll: () => ContextType;
export default useScroll;
//# sourceMappingURL=useScrollContextCustomHook.d.ts.map