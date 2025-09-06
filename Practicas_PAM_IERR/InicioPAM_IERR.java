
import javax.swing.JOptionPane;
public class InicioPAM_IERR 
{
    public static void main(String[] args)
    {

        int opcion;
    do
    {
        String input = JOptionPane.showInputDialog(
                "Menú\n1.-  Mostrar Reglamento POO\n2.-Mostrar LineamientosClassroom\n3.- Mostrar Fechas de Parciales\n4.- Mostrar Porcentajes Por Parcial\n5.- Salir\n¿Qué opción eliges?");
                opcion = Integer.parseInt(input);

        switch(opcion)
        {
            case 1 :
               {
                   ReglamentoPOO();
               }
               break;
          case 2 :
               {
                    LineamientosClassroom();
               }
               break;
          case 3 :
               {
                    MostrarFechasParciales();
               }
               break;
          case 4 :
               {
                     MostrarPorcentajeParcial();
               }
               break;
          case 5 :
               JOptionPane.showMessageDialog(null, "Programa Terminado");
               break;
          default:
          JOptionPane.showMessageDialog(null, "La opción Ingresada no es correcta\n La opcion debe ser entre 1 y 5", 
                                               "Error", JOptionPane.ERROR_MESSAGE);
          break;
        }

    }while(opcion != 5);

    }
    
public static void ReglamentoPOO()
{

JOptionPane.showMessageDialog(null, "1.Se requiere 80% de asistencia para tener derecho a evaluación parcial y 80% de trabajos en clase.\r\n" + //
        "2.Se permiten 10 minutos de tolerancia y si el alumno llega después de este tiempo puede permanecer en la clase, pero no se tomará la asistencia (Solamente en los horarios de\r\n" + //
        "inicio:7:00a.m y 14:00 p.m).\r\n" + //
        "3. Las faltas deberán estar justificadas mediante el correo institucional con un plazo máximo de 24 horas posteriores a la hora de falta en clase mediante correo del tutor (a),\r\n" + //
        "justificantes entregados fuera de la fecha límite permitido no se aceptan, únicamente se aceptarán recetas médicas y citatorios jurídicos.(De forma física deben ser presentados al\r\n" + //
        "tutor para ser validados y de forma posterior emitidos).\r\n" + //
        "4. Las tareas y trabajos deberán subirlas al Classroom de forma individual y no se recibirán de manera extemporánea.(Salvo previo justificante validado por el tutor)\r\n" + //
        "5. Las tareas y trabajos presentarlos en tiempo y forma. La demora de un trabajo o tarea sin justificante y/o con justificante fuera del límite no se aceptan.\r\n" + //
        "6. Utilizar el correo institucional para trabajar bajo la plataforma Google Classroom.\r\n" + //
        "7. El plagio o copia de trabajos y/o exámenes, será condicionado a reprobar a la asignatura y se reportará al área correspondiente.\r\n" + //
        "8. Cualquier deshonestidad académica será sancionada reprobando el parcial sin derecho a examen final\r\n" + //
        "9. En circunstancia de indisciplina o falta de respeto por parte del alumno hacia docentes,administrativos, compañeros o cualquier persona perteneciente a la universidad, se realizará\r\n" + //
        "una primera llama de atención, si el alumno hace caso omiso tendrá que abandonar el aula, tres incidencias de este tipo el alumno no tendrá derecho a examen final o parcial.\r\n" + //
        "10. Uso de laptops y/o dispositivos móviles quedará limitados a uso exclusivo de las actividades que así lo requieran.\r\n" + //
        "11. Prohibido el uso de audífonos durante la clase.\r\n" + //
        "12. Prohibido comer y/o tomar líquidos en el salón.\r\n" + //
        "13. Prohibido sentarse encima de las mesas , así como columpiarse en las sillas.\r\n" + //
        "14.Todo tema académido debe ser revisado primeramente por parte del alumno con el docente, de no resolverse, pasar con su respectivo tutor, y de ser necesario con la coordinación\r\n" + //
        "de tutores. En caso de no solucionarse pasar a la dirección del programa educativo (debe mantenerse este seguimiento de forma obligatoria)\r\n" + //
        "15.Cualquier situación no prevista en el presente reglamento pasar directamente con la dirección del programa educativo.\r\n" + //
        "16. El día destinado a entrega de calificaciones todos los estudiantes deben estar presentes, ese día se entregarán exámenes y se brindará retroalimentación\r\n" + //
        "17.Este reglamento entra en vigor después de que se firme o se acepte por la mayoría de los estudiantes asistentes a la primera sesión de la materia, una vez firmado o aceptado por el\r\n" + //
        "50% más el jefe de grupo, es vigente para todo alumno inscrito en el curso aunque no esté presente en la primera sesión.");
}
public static void LineamientosClassroom()
{
    JOptionPane.showInputDialog("ENTREGAR los trabajos para su revisión\n 1.- Entregas en PDF\n 2.-Avisos de clase\n 3.-Entregas autorizadas con retraso , 5 calificacion MAXIMA");
}
public static void MostrarFechasParciales()
{
    JOptionPane.showInputDialog("1er Parcial: 01-10-25\n 2do Parcial: 05-10-25\n 3er Parcial: 03-12-25\n Final: 08-12-25");
}
public static void MostrarPorcentajeParcial()
{
    JOptionPane.showInputDialog("                                                               1P 2P  3P\n EVIDENCIA DE CONOCIMIENTO 40% 40% 20%\n EVIDENCIA DE DESEMPEÑO 20% 20% 10%\n EVIDENCIA DE PRODUCTO 30% 20% 40%\n PROYECTO INTEGRADOR 10% 20% 30%");
}
 
}
