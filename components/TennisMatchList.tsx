import React from 'react';
import { FlatList, StyleSheet} from 'react-native';
import { TennisMatchModel } from '../model/Models';
import { TennisMatch } from './TennisMatch';

type Props = {
    matches: TennisMatchModel[];
}

export const TennisMatchList = (props: Props) => {
    return (
        <FlatList
        contentContainerStyle={styles.tennisList}
            data={props.matches}
            renderItem={({ item }) => <TennisMatch match={item} />}
        />
    )
}

const styles = StyleSheet.create({
    tennisList: {
        alignItems: 'center',
        flexDirection: 'column-reverse'
    }
})