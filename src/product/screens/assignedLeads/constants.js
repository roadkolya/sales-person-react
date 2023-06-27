import {Button} from "@mui/material";

export const columns = [
    {
        field: 'Job_Number',
        headerName: 'Job Number',
        type: 'string',
        width: 150,
        editable: true,
    },
    {
        field: 'Last_Name',
        headerName: 'Last Name',
        type: 'string',
        width: 150,
        editable: true,
    },
    {
        field: 'movingFrom',
        headerName: 'Moving From',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        field: 'movingTo',
        headerName: 'Moving To',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        field: 'stage',
        headerName: 'Stage',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        field: 'moveType',
        headerName: 'Move Type',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        field: 'leadPhone',
        headerName: 'Lead Phone',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        field: 'jobDate',
        headerName: 'Job Date',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        field: 'lastCommunication',
        headerName: 'Last Communication',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        field: 'campaign',
        headerName: 'Campaign',
        type: 'string',
        width: 110,
        editable: true,
    },
    {
        field: 'unread',
        headerName: 'Unread',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) => `${params.row.unread || ''}`,
    },
    {
        field: 'Action',
        width: 160,

        sortable: false,
        renderCell: (cellValues) => {
            return (
                <Button

                    onClick={ () => console.log(cellValues.row) }
                >
                    Add to
                </Button>

            );
        }
    }
];