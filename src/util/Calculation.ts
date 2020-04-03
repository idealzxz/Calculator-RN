class Calculation {
    private List: any = null;

    constructor(List: any) {
        this.List = List || [];
    }
    // 养老保险计算
    Pension(Pay: number, SbBase: number) {
        return SbBase * 0.08;
    }
    // 医疗保险计算
    Medical(Pay: number, SbBase: number) {
        return SbBase * 0.02;
    }
    // 失业保险计算
    Unemployment(Pay: number, SbBase: number) {
        return SbBase * 0.005;
    }
    // 住房公积金计算
    ProvidentFund(GjjBase: number, GjjRate: number) {
        return (GjjBase * GjjRate) / 100;
    }
    StartMath() {
        let {Pay, SbBase, GjjBase, GjjRate} = this.List;
        let Pension = this.Pension(Pay, SbBase);
        let Medical = this.Medical(Pay, SbBase);
        let Unemployment = this.Unemployment(Pay, SbBase);
        let ProvidentFund = this.ProvidentFund(GjjBase, GjjRate);
        let sum = Pension+Medical+Unemployment+ProvidentFund;
        let result = [
            {name: '养老保险', value: Pension},
            {name: '医疗保险', value: Medical},
            {name: '失业保险', value: Unemployment},
            {name: '住房公积金', value: ProvidentFund},
            {name: '共计支出', value: sum},
            {name: '扣除五险一金税前月薪', value: Pay-sum},
        ];
        return result;
    }
}
export default Calculation;
