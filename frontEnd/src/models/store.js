import {AssigneesModelContext} from '~/*/models/AssigneesModel';
import {LabelModelContext} from '~/*/models/LabelModel';
import {AuthorModelContext} from '~/*/models/AuthorModel';
import {MilestoneModelContext} from '~/*/models/MilestoneModel';
import {IssueListModelContext} from '~/*/models/IssueListModel';
import {FilterModelContext} from '~/*/models/FilterModel';

export const Author = 'Author';
export const Label = 'Label';
export const Milestone = 'Milestone';
export const Assignee = 'Assignee';
export const IssueList = 'IssueList';
export const Filter = 'Filter';

export const modelStore = {
  Author: AuthorModelContext,
  Label: LabelModelContext,
  Milestone: MilestoneModelContext,
  Assignee: AssigneesModelContext,
  IssueList: IssueListModelContext,
  Filter: FilterModelContext,
};
