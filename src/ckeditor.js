/**
 * @license Copyright (c) 2014-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder.js';
import SimpleUploadAdapter from "@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter";
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Image from '@ckeditor/ckeditor5-image/src/image.js';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table.js';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave.js';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline.js';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
import IndentBlock from '@ckeditor/ckeditor5-indent/src/indentblock.js';
import MediaEmbedToolbar from '@ckeditor/ckeditor5-media-embed/src/mediaembedtoolbar.js';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript.js';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript.js';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';

export default class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Autoformat,
  BlockQuote,
  Bold,
  CKFinder,
  SimpleUploadAdapter,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  Italic,
  Link,
  List,
  MediaEmbed,
  PasteFromOffice,
  Table,
  TableToolbar,
  Alignment,
  Autosave,
  FontColor,
  FontSize,
  HorizontalLine,
  Highlight,
  ImageResize,
  IndentBlock,
  MediaEmbedToolbar,
  TableCellProperties,
  Superscript,
  Subscript,
  TableProperties,
  WordCount,
  Underline,
  Essentials,
  Paragraph
];

Editor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'link',
			'underline',
			'bulletedList',
			'numberedList',
			'|',
			'alignment',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'CKFinder',
			'mediaEmbed',
			'blockQuote',
			'insertTable',
			'|',
			'fontSize',
			'fontColor',
			'highlight',
			'|',
			'superscript',
			'subscript',
			'|',
			'horizontalLine',
			'|',
			'undo',
			'redo'
		]
	},
	language: 'en',
	image: {
		toolbar: [
			'imageTextAlternative',
			'imageStyle:full',
			'imageStyle:side'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells',
			'tableCellProperties',
			'tableProperties'
		]
	},
	licenseKey: '',
}