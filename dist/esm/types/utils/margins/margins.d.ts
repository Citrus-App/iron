declare const integerVals: number;
declare const autoVals = "auto";
declare type MarginsTypes = {
    m: typeof integerVals | typeof autoVals;
    mb: typeof integerVals | typeof autoVals;
    ml: typeof integerVals | typeof autoVals;
    mr: typeof integerVals | typeof autoVals;
    mt: typeof integerVals | typeof autoVals;
};
export default MarginsTypes;
