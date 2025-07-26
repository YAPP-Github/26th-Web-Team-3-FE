interface Props {
  openAt: string;
}

const OpenInfoSection = ({ openAt }: Props) => {
  return (
    <div>
      <p>오픈일</p>
      <p>{openAt}</p>
    </div>
  );
};

export default OpenInfoSection;
