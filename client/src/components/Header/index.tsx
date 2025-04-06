type Props = {
    name:string;
    buttonComponent?:any
    isSmallText?:boolean
};
const Header = ({
    name,
    buttonComponent,
    isSmallText = false
}: Props) => {
    return (
        <div>Header</div>
    );
};
export default Header;
