import { StyleSheet, Text, View } from 'react-native';
import { COULEURS } from '../styles/couleurs';

export default function TacheCard({ titre, categorie, statut }) {
  const statusLabel = statut ? 'Terminé' : 'À faire';

  return (
    <View style={[styles.card, statut && styles.completedCard]}>
      <View style={styles.content}>
        <View style={styles.topRow}>
          <Text style={[styles.title, statut && styles.completedTitle]}>{titre}</Text>
          <View style={styles.categoryBadge}>
            <Text style={styles.categoryText}>{categorie}</Text>
          </View>
        </View>

        <View
          accessibilityLabel={`Tâche ${statusLabel.toLowerCase()}`}
          accessibilityRole="text"
          style={styles.status}>
          <Text style={[styles.statusIndicator, statut && styles.completedIndicator]}></Text>
          <Text style={[styles.statusText, statut && styles.completedStatusText]}>
            {statusLabel}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: COULEURS.muted,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    padding: 16,
  },
  completedCard: {
    borderColor: COULEURS.accent,
  },
  content: {
    flex: 1,
  },
  topRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: COULEURS.texte,
    fontSize: 16,
    fontWeight: '700',
    flex: 1,
  },
  completedTitle: {
    textDecorationLine: 'line-through',
  },
  categoryBadge: {
    backgroundColor: COULEURS.accent,
    borderRadius: 12,
    marginLeft: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  categoryText: {
    color: COULEURS.primaire,
    fontSize: 12,
    fontWeight: '600',
  },
  status: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 8,
  },
  statusIndicator: {
    backgroundColor: COULEURS.muted,
    borderRadius: 9,
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
    height: 18,
    lineHeight: 18,
    textAlign: 'center',
    width: 18,
  },
  completedIndicator: {
    backgroundColor: COULEURS.validate,
  },
  statusText: {
    color: COULEURS.muted,
    fontSize: 11,
    marginLeft: 5,
  },
  completedStatusText: {
    color: COULEURS.primaire,
  },
});
