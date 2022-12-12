import React from 'react';
import { StyleSheet, Text, View, Image, FlatList, ScrollView } from 'react-native';


export default function Books() {
  return(
    <ScrollView>
    <View style={styles.container}>
    <Text style={{fontSize: 22, fontWeight: 'bold'}}>Plato - Republic</Text>
    <Image 
      style={{width: 200, height: 350}} 
      source={require('../assets/plato_republic.png')} />
    <Text>c. 375 BCE</Text>
    <Text style={{fontSize: 16, margin: 10}}>
      The Republic is a Socratic dialogue, authored by Plato around 375 BCE, concerning justice, the order and character of the just city-state, and the just man. 
      It is Plato's best-known work, and one of the world's most influential works of philosophy and political theory, both intellectually and historically.
      In the dialogue, Socrates discusses the meaning of justice and whether the just man is happier than the unjust man with various Athenians and foreigners.
    </Text>

    <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 20}}>Seneca - Letters from a Stoic</Text>
    <Image 
      style={{width: 200, height: 350}} 
      source={require('../assets/seneca_stoic.png')} />
    <Text>c. 65 CE</Text>
    <Text style={{fontSize: 16, margin: 10}}>
      Also known as the Moral Epistles is a collection of 124 letters that Seneca the Younger wrote at the end of his life, during his retirement, after he had worked for the Emperor Nero for more than ten years.
      The letters often begin with an observation on daily life, and then proceed to an issue or principle abstracted from that observation. 
      The result is like a diary, or handbook of philosophical meditations. The letters focus on many traditional themes of Stoic philosophy such as the contempt of death, the stout-heartedness of the sage, and virtue as the supreme good.
    </Text>

    <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 20}}>Marcus Aurelius - Meditations</Text>
    <Image 
      style={{width: 250, height: 350}} 
      source={require('../assets/aurelius_meditations.png')} />
    <Text>c. 161 - 180 CE</Text>
    <Text style={{fontSize: 16, margin: 10}}>
      Meditations is a series of personal writings by Marcus Aurelius, Roman Emperor from AD 161 to 180, recording his private notes to himself and ideas on Stoic philosophy.
      A central theme to Meditations is the importance of analyzing one's judgment of self and others and developing a cosmic perspective:
      His Stoic ideas often involve avoiding indulgence in sensory affections, a skill which will free a man from the pains and pleasures of the material world. He claims that the only way a man can be harmed by others is to allow his reaction to overpower him. 
    </Text>

    <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 20}}>Rene Descartes - Meditations on First Philosophy</Text>
    <Image 
      style={{width: 250, height: 350}} 
      source={require('../assets/descartes_philosophy.png')} />
    <Text>1641</Text>
    <Text style={{fontSize: 16, margin: 10}}>
      The book is made up of six meditations, in which Descartes first discards all belief in things that are not absolutely certain, and then tries to establish what can be known for sure. 
      He wrote the meditations as if he had meditated for six days: each meditation refers to the last one as "yesterday". One of the most influential philosophical texts ever written, it is widely read to this day.
      The book consists of the presentation of Descartes' metaphysical system at its most detailed level and in the expanding of his philosophical system, first introduced in the fourth part of his Discourse on Method (1637). 
      Descartes' metaphysical thought is also found in the Principles of Philosophy (1644), which the author intended to be a philosophical guidebook.
    </Text>

    <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 20}}>Benedict de Spinoza - Ethics</Text>
    <Image 
      style={{width: 250, height: 350}} 
      source={require('../assets/spinoza_ethics.png')} />
    <Text>1677</Text>
    <Text style={{fontSize: 16, margin: 10}}>
    The book is perhaps the most ambitious attempt to apply the method of Euclid in philosophy. 
    Spinoza puts forward a small number of definitions and axioms from which he attempts to derive hundreds of propositions and corollaries, such as "When the Mind imagines its own lack of power, it is saddened by it",
    "A free man thinks of nothing less than of death", and "The human Mind cannot be absolutely destroyed with the Body, but something of it remains which is eternal."
    </Text>

    <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 20}}>Arthur Schopenhauer - The World as Will and Representation</Text>
    <Image 
      style={{width: 250, height: 350}} 
      source={require('../assets/schopenhauer_will.png')} />
    <Text>1818</Text>
    <Text style={{fontSize: 16, margin: 10}}>
    Taking the transcendental idealism of Immanuel Kant as his starting point, Schopenhauer argues that the world humans experience around them—the world of objects in space and time and related in causal ways—exists solely as "representation" (Vorstellung) dependent on a cognizing subject, 
    not as a world that can be considered to exist in itself (i.e., independently of how it appears to the subject's mind). 
    One's knowledge of objects is thus knowledge of mere phenomena rather than things-in-themselves. Schopenhauer identifies the thing-in-itself—the inner essence of everything—as will: 
    a blind, unconscious, aimless striving devoid of knowledge, outside of space and time, and free of all multiplicity. The world as representation is, therefore, the "objectification" of the will. 
    </Text>

    <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 20}}>Friedrich Nietzsche - Beyond Good and Evil</Text>
    <Image 
      style={{width: 250, height: 350}} 
      source={require('../assets/kant_critique.png')} />
    <Text>1886</Text>
    <Text style={{fontSize: 16, margin: 10}}>
    In Beyond Good and Evil, Nietzsche accuses past philosophers of lacking critical sense and blindly accepting dogmatic premises in their consideration of morality. Specifically, 
    he accuses them of founding grand metaphysical systems upon the faith that the good man is the opposite of the evil man, rather than just a different expression of the same basic impulses that find more direct expression in the evil man. 
    The work moves into the realm "beyond good and evil" in the sense of leaving behind the traditional morality which Nietzsche subjects to a destructive critique in favour of what he regards as an affirmative approach that fearlessly confronts the perspectival nature of knowledge and the perilous condition of the modern individual.
    </Text>

    <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 20}}>Bertrand Russell - The Problems of Philosophy</Text>
    <Image 
      style={{width: 250, height: 350}} 
      source={require('../assets/russell_problems.png')} />
    <Text>1912</Text>
    <Text style={{fontSize: 16, margin: 10}}>
    In this book Russell introduces philosophy as a repeating series of (failed) attempts to answer the same questions: Can we prove that there is an external world? Can we prove cause and effect? Can we validate any of our generalizations? Can we objectively justify morality? 
    He asserts that philosophy cannot answer any of these questions and that any value of philosophy must lie elsewhere than in offering proofs to these questions.
    Focusing on problems he believes will provoke positive and constructive discussion, Russell concentrates on knowledge rather than metaphysics: 
    If it is uncertain that external objects exist, how can we then have knowledge of them but by probability. There is no reason to doubt the existence of external objects simply because of sense data.
    </Text>

    <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 20}}>Martin Heidegger - Being and Time</Text>
    <Image 
      style={{width: 250, height: 350}} 
      source={require('../assets/heidegger_beingtime.png')} />
    <Text>1927</Text>
    <Text style={{fontSize: 16, margin: 10}}>
    The book attempts to revive ontology through an analysis of Dasein, or "being-in-the-world." It is also noted for an array of neologisms and complex language,
    as well as an extended treatment of "authenticity" as a means to grasp and confront the unique and finite possibilities of the individual.
    The work claims that ordinary and even mundane "being-in-the-world" provides "access to the meaning, or 'sense of being.' [Sinn des Seins]." This access via Dasein is also that "in terms of which something becomes intelligible as something.
    </Text>

    <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 20}}>Jean-Paul Sartre - Being and Nothingness</Text>
    <Image 
      style={{width: 250, height: 350}} 
      source={require('../assets/sartre_nothingness.png')} />
    <Text>1943</Text>
    <Text style={{fontSize: 16, margin: 10}}>
    In the book, Sartre develops a philosophical account in support of his existentialism, dealing with topics such as
    consciousness, perception, social philosophy, self-deception, the existence of "nothingness", psychoanalysis, and the question of free will.
    Though influenced by Heidegger, Sartre was profoundly skeptical of any measure by which humanity could achieve a kind of personal state of fulfillment comparable to the hypothetical Heideggerian "re-encounter with Being". 
    In Sartre's account, man is a creature haunted by a vision of "completion" (what Sartre calls the ens causa sui, meaning literally "a being that causes itself"), which many religions and philosophers identify as God. 
    </Text>

    </View>
    </ScrollView>
  
  )
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      padding: 20,
    },
  });
  
 