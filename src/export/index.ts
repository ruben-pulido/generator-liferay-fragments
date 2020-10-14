import AuthGenerator from '../utils/auth-generator';
import exportProject from './export';

export default class ExportGenerator extends AuthGenerator {
  async asking(): Promise<void> {
    await super.asking();
    const groupId = this.getGroupId();

    if (!groupId) {
      throw new Error('groupId cannot be undefined');
    }

    this.log('Exporting site...');
    await exportProject(groupId, this.destinationPath());
    this.log('Site succesfully exported', { level: 'success' });
  }
}
