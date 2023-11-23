import useChat from "../../Hooks/useChat";
import SearchBar from "../../components/SearchBar";
import ChatList from "../../moleculs/ChatList";

interface Props {
  onClick: any;
}

const Chats = ({ onClick }: Props) => {
  const { chats } = useChat();
  return (
    <div className="row">
      <div className="col-12">
        <SearchBar />
      </div>
      <div className="col-12">
        <ChatList
          onClick={onClick}
          isLoading={chats.isLoading}
          data={chats.data?.data?.data?.data}
        />
      </div>
    </div>
  );
};

export default Chats;
