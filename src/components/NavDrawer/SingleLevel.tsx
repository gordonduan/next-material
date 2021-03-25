import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from "next/link";

const SingleLevel = ({ item }) => {
    return (
      <ListItem button>
        <ListItemIcon>{item.icon} </ListItemIcon>
        <Link href={item.key}>
            <ListItemText primary={item.title} />
        </Link>
      </ListItem>
    )
};

export default SingleLevel;
