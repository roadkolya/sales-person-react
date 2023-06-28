import {Button} from "@mui/material";
import {startCampaign} from '../../business/redux/reducers/campaign/actions'

export const columns = [
    {
        field: 'name',
        headerName: 'Name',
        type: 'string',
        width: 150,
        editable: true,
    },
    {
        field: 'status',
        headerName: 'Status',
        type: 'string',
        width: 150,
        editable: true,
    },
    {
        field: 'type',
        headerName: 'Type',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        field: 'Action',
        width: 160,

        sortable: false,
        renderCell: (cellValues) => {
            let name = '';
            if (cellValues.row.status == 'not_started' || cellValues.row.status == 'pause'){
                name = 'Start'
            }
            else if (cellValues.row.status == 'in_progress'){
                name = 'Pause'
            }

            return (
                <Button
                    onClick={ () => startCampaign(cellValues.row.id) }
                >
                    {name}
                </Button>

            );
        }
    }
];