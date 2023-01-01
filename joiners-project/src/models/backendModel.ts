export default class BackendModel {
    public language:string;
    public algorithm?:string;
    /**
     * select from main 6 types:
     * Recursive Algorithm
     * Divide and Conquer Algorithm.
     * Dynamic Programming Algorithm.
     * Greedy Algorithm.
     * Brute Force Algorithm.
     * Backtracking Algorithm.
     * add an option to select "other"
     */
    public technology?: string;
    public operatingSystem:string;
    public db?:string;
}