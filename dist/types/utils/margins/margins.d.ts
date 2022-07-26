declare const integerVals: number;
declare const autoVals = "auto";
interface MarginsTypes {
    m: typeof integerVals | typeof autoVals;
    mb: typeof integerVals | typeof autoVals;
    ml: typeof integerVals | typeof autoVals;
    mr: typeof integerVals | typeof autoVals;
    mt: typeof integerVals | typeof autoVals;
}
export default MarginsTypes;
