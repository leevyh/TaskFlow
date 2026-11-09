import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import TacheCard from '../components/TacheCard';
import { COULEURS } from '../styles/couleurs';

const taches = [
  {
    id: 1,
    titre: 'Créer la maquette',
    categorie: 'Design',
    statut: true,
  },
  {
    id: 2,
    titre: 'Installer Expo',
    categorie: 'Setup',
    statut: true,
  },
  {
    id: 3,
    titre: 'Composant TacheCard',
    categorie: 'Dev',
    statut: true,
  },
  {
    id: 4,
    titre: 'Ecran d\'accueil',
    categorie: 'Dev',
    statut: true,
  },
  {
    id: 5,
    titre: 'Tester sur téléphone',
    categorie: 'QA',
    statut: false,
  },
];

export default function AccueilScreen() {
  return (
    <SafeAreaView edges={['top', 'bottom']} style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>TaskFlow</Text>
          <Text style={styles.subtitle}>Vos tâches du moment.</Text>
        </View>

        <View style={styles.taskList}>
          {taches.map((tache) => (
            <TacheCard
              categorie={tache.categorie}
              key={tache.id}
              statut={tache.statut}
              titre={tache.titre}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: COULEURS.fond,
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    color: COULEURS.primaire,
    fontSize: 32,
    fontWeight: '700',
  },
  subtitle: {
    color: COULEURS.muted,
    fontSize: 16,
    marginTop: 8,
  },
  taskList: {
  },
});